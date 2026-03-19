import React, { useMemo, useState } from 'react';
import { Pressable, ScrollView, Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Button } from '../../ui-components/button/button.component';
import { Input } from '../../ui-components/input/input.component';
import { tasksStyles } from './tasks.styles';

type TaskItem = {
  id: string;
  title: string;
};

export function Tasks() {
  const [taskText, setTaskText] = useState('');
  const [editingTaskId, setEditingTaskId] = useState<string | null>(null);
  const [tasks, setTasks] = useState<TaskItem[]>([
    { id: '1', title: '1 Hello World' },
    { id: '2', title: '2 Hello World' },
  ]);

  const isEditing = editingTaskId !== null;

  const totalTasks = useMemo(() => tasks.length, [tasks]);

  const handleAddOrUpdateTask = () => {
    const preparedText = taskText.trim();

    if (!preparedText) {
      return;
    }

    if (editingTaskId) {
      setTasks(currentTasks =>
        currentTasks.map(task =>
          task.id === editingTaskId ? { ...task, title: preparedText } : task,
        ),
      );

      setEditingTaskId(null);
      setTaskText('');
      return;
    }

    const newTask: TaskItem = {
      id: Date.now().toString(),
      title: preparedText,
    };

    setTasks(currentTasks => [newTask, ...currentTasks]);
    setTaskText('');
  };

  const handleEditTask = (task: TaskItem) => {
    setEditingTaskId(task.id);
    setTaskText(task.title);
  };

  const handleDeleteTask = (taskId: string) => {
    setTasks(currentTasks => currentTasks.filter(task => task.id !== taskId));

    if (editingTaskId === taskId) {
      setEditingTaskId(null);
      setTaskText('');
    }
  };

  const handleCancelEdit = () => {
    setEditingTaskId(null);
    setTaskText('');
  };

  return (
    <SafeAreaView style={tasksStyles.scene}>
      <Text style={tasksStyles.sceneTitle}>Tasks</Text>

      <View style={tasksStyles.summaryCard}>
        <Text style={tasksStyles.summaryValue}>{totalTasks}</Text>
        <Text style={tasksStyles.summaryLabel}>Total tasks</Text>
      </View>

      <View style={tasksStyles.formCard}>
        <Input
          label={isEditing ? 'Edit task' : 'New task'}
          onChangeText={setTaskText}
          placeholder={isEditing ? 'Update task title' : 'Enter task title'}
          value={taskText}
        />

        <Button
          onPress={handleAddOrUpdateTask}
          title={isEditing ? 'Save Changes' : 'Add Task'}
        />

        {isEditing && (
          <Button
            onPress={handleCancelEdit}
            style={tasksStyles.cancelButton}
            textStyle={tasksStyles.cancelButtonText}
            title="Cancel"
            variant="danger"
          />
        )}
      </View>

      <ScrollView
        contentContainerStyle={tasksStyles.listContent}
        showsVerticalScrollIndicator={false}
      >
        {tasks.map(task => (
          <View key={task.id} style={tasksStyles.taskCard}>
            <Text style={tasksStyles.taskTitle}>{task.title}</Text>

            <View style={tasksStyles.actionsRow}>
              <Pressable
                onPress={() => handleEditTask(task)}
                style={tasksStyles.editAction}
              >
                <Text style={tasksStyles.editActionText}>Edit</Text>
              </Pressable>

              <Pressable
                onPress={() => handleDeleteTask(task.id)}
                style={tasksStyles.deleteAction}
              >
                <Text style={tasksStyles.deleteActionText}>Delete</Text>
              </Pressable>
            </View>
          </View>
        ))}
      </ScrollView>
    </SafeAreaView>
  );
}
