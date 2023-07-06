import { Col, Row, Input, Button, Select, Tag } from 'antd';
import Todo from '../Todo';
import { useDispatch, useSelector } from 'react-redux';
import { v4 as uuidv4 } from 'uuid';
import { useState } from 'react';
import { todosRemainingSelector } from '../../redux/selectors';
import todoListSlice from './TodoListSlice';

export default function TodoList() {
    const [todoName, setTodoName] = useState('');
    const [priority, setPriority] = useState('Medium');

    const todoList = useSelector(todosRemainingSelector);

    const dispath = useDispatch();

    const handleAddTodoList = () => {
        // dispath()
        dispath(
            todoListSlice.actions.addTodo({
                id: uuidv4(),
                name: todoName,
                priority: priority,
                completed: false,
            }),
        );

        // clear input todo name value
        setTodoName('');
    };

    const handleInputChange = (e) => {
        setTodoName(e.target.value);
    };

    const handlePriorityChange = (value) => {
        setPriority(value);
    };

    return (
        <Row style={{ height: 'calc(100% - 40px)', overflowY: 'auto' }}>
            <Col
                span={24}
                style={{ height: 'calc(100% - 40px)', overflowY: 'auto' }}
            >
                {todoList.map((todo) => (
                    <Todo
                        key={todo.id}
                        id={todo.id}
                        name={todo.name}
                        prioriry={todo.priority}
                        completed={todo.completed}
                    />
                ))}
            </Col>
            <Col span={24}>
                <Input.Group style={{ display: 'flex' }} compact>
                    <Input
                        value={todoName}
                        onChange={handleInputChange}
                        onPressEnter={handleAddTodoList}
                    />
                    <Select
                        defaultValue="Medium"
                        value={priority}
                        onChange={handlePriorityChange}
                    >
                        <Select.Option value="High" label="High">
                            <Tag color="red">High</Tag>
                        </Select.Option>
                        <Select.Option value="Medium" label="Medium">
                            <Tag color="blue">Medium</Tag>
                        </Select.Option>
                        <Select.Option value="Low" label="Low">
                            <Tag color="gray">Low</Tag>
                        </Select.Option>
                    </Select>
                    <Button
                        type="primary"
                        onClick={handleAddTodoList}
                        disabled={!todoName.trim()}
                    >
                        Add
                    </Button>
                </Input.Group>
            </Col>
        </Row>
    );
}
