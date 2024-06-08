'use client'

import React, { useState } from 'react';
import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd';

const initialColors = [
    "#FF5733", "#33FF57", "#3357FF", "#F3FF33",
    "#33FFF2", "#F233FF", "#FF33F2", "#57FF33"
];

const ColorPalette = () => {
    const [colors, setColors] = useState(initialColors);

    const handleDragEnd = (result) => {
        if (!result.destination) return;

        const items = Array.from(colors);
        const [reorderedItem] = items.splice(result.source.index, 1);
        items.splice(result.destination.index, 0, reorderedItem);

        setColors(items);
    };

    const handleColorChange = (index, newColor) => {
        const updatedColors = colors.map((color, i) => (i === index ? newColor : color));
        setColors(updatedColors);
    };

    return (
        <DragDropContext onDragEnd={handleDragEnd}>
            <Droppable droppableId="colors" direction="horizontal">
                {(provided) => (
                    <div
                        {...provided.droppableProps}
                        ref={provided.innerRef}
                        style={{ display: 'flex', gap: '10px', padding: '20px', backgroundColor: '#f0f0f0' }}
                    >
                        {colors.map((color, index) => (
                            <Draggable key={color} draggableId={color} index={index}>
                                {(provided) => (
                                    <div
                                        ref={provided.innerRef}
                                        {...provided.draggableProps}
                                        {...provided.dragHandleProps}
                                        style={{
                                            userSelect: 'none',
                                            padding: '10px',
                                            margin: '0 10px 0 0',
                                            backgroundColor: color,
                                            color: 'white',
                                            ...provided.draggableProps.style,
                                        }}
                                    >
                                        <input
                                            type="color"
                                            value={color}
                                            onChange={(e) => handleColorChange(index, e.target.value)}
                                            style={{ width: '100%' }}
                                        />
                                    </div>
                                )}
                            </Draggable>
                        ))}
                        {provided.placeholder}
                    </div>
                )}
            </Droppable>
        </DragDropContext>
    );
};

export default ColorPalette;
