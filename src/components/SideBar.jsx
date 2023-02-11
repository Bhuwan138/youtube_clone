import { Stack } from '@mui/system'
import React from 'react'
import { categories } from '../utils/constants'

const SideBar = ({selectedCategory,setSelectedCategory}) => (
    <Stack
        direction="row"
        sx= {{
            overflowY: "auto",
            height:{ sx: 'auto', md: '95%' },
            flexDirection:{ md: "column"}
        }}
    >
        {categories.map((category)=>(
            <button 
                className='category-btn'  
                style= {{
                    background: category.name === selectedCategory && '#FC1503',
                    color:'#fff'
                }}
                key={category.name}
                onClick={()=> setSelectedCategory(category.name)}
            >
                <span style={{
                    marginRight:'15px',
                    color: category.name === selectedCategory? "white":"red"
                }} >{category.icon}</span> 
                <span style={{
                    opacity: category.name === selectedCategory? '1':'0.8'
                }} >{category.name}</span>
            </button>
        ))}
    </Stack>
)

export default SideBar