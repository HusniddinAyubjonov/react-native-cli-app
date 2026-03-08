import React, { useMemo, useState } from 'react';
import { Pressable, ScrollView, Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Button } from '../../ui-components/button/button-component';
import { Input } from '../../ui-components/input/input-component';
import { tasksScreenStyles } from './tasks-screen-styles';

type TaskItem = {
  id: string;
  title: string;
};

export function TasksScreen() {
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
    <SafeAreaView style={tasksScreenStyles.scene}>
      <Text style={tasksScreenStyles.sceneTitle}>Tasks</Text>

      <View style={tasksScreenStyles.summaryCard}>
        <Text style={tasksScreenStyles.summaryValue}>{totalTasks}</Text>
        <Text style={tasksScreenStyles.summaryLabel}>Total tasks</Text>
      </View>

      <View style={tasksScreenStyles.formCard}>
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
            style={tasksScreenStyles.cancelButton}
            textStyle={tasksScreenStyles.cancelButtonText}
            title="Cancel"
            variant="danger"
          />
        )}
      </View>

      <ScrollView
        contentContainerStyle={tasksScreenStyles.listContent}
        showsVerticalScrollIndicator={false}
      >
        {tasks.map(task => (
          <View key={task.id} style={tasksScreenStyles.taskCard}>
            <Text style={tasksScreenStyles.taskTitle}>{task.title}</Text>

            <View style={tasksScreenStyles.actionsRow}>
              <Pressable
                onPress={() => handleEditTask(task)}
                style={tasksScreenStyles.editAction}
              >
                <Text style={tasksScreenStyles.editActionText}>Edit</Text>
              </Pressable>

              <Pressable
                onPress={() => handleDeleteTask(task.id)}
                style={tasksScreenStyles.deleteAction}
              >
                <Text style={tasksScreenStyles.deleteActionText}>Delete</Text>
              </Pressable>
            </View>
          </View>
        ))}
      </ScrollView>
    </SafeAreaView>
  );
}
