import React, { useState } from 'react'
import { Container, Typography, Grid, TextField, Box } from '@mui/material';
import { Card, CardActionArea, CardMedia, CardContent } from '@mui/material';
import { NavLink } from 'react-router-dom';

import Fuse from 'fuse.js'

import NavBar from '../components/nav_bar'
import Header from '../components/header'

const data = [
    {
        name:'Fisica General I',
        sign:'FIS110',
        year:'2023',
        semester:'02',
        img:'../assets/courses/fis.png',
        link:'/course',
    },
    {
        name:'Fisica General II',
        sign:'FIS120',
        year:'2023',
        semester:'02',
        img:'../assets/courses/fis.png',
        link:'/course',
    },
    {
        name:'Fisica General III',
        sign:'FIS130',
        year:'2023',
        semester:'02',
        img:'../assets/courses/fis.png',
        link:'/course',
    },
    {
        name:'Fisica General IV',
        sign:'FIS140',
        year:'2023',
        semester:'02',
        img:'../assets/courses/fis.png',
        link:'/course',
    },
    {
        name:'Diseño de Interfaces Usuarias',
        sign:'INF322',
        year:'2023',
        semester:'02',
        img:'../assets/courses/fis.png',
        link:'/course',
    },
    {
        name:'Computacion Cientifica',
        sign:'INF285',
        year:'2023',
        semester:'02',
        img:'../assets/courses/fis.png',
        link:'/course',
    },
];

const CourseCard = ({ name, sign, year, semester, img, link}) => {
    return (
        <NavLink to={link}>
            <CardActionArea 
                sx={{ '&:hover': { transform: 'scale(1.05)'} }}
            >
                <Card sx={{ maxWidth: 350 }}>
                    <CardMedia src={img} />
                    <CardContent>
                        <Typography variant={'h5'}>({sign}) {name}</Typography>
                        <Typography variant={'h6'}>{year}-{semester}</Typography>
                    </CardContent>
                </Card>
            </CardActionArea>
        </NavLink>
    )
}

export const HomePage = () => {
    const [searchData, setSearchData] = useState(data);
    const searchItem = (query) => {
        if (!query) {
            setSearchData(data);
            return;
        }
        query = query.toLowerCase();

        const fuse = new Fuse(data, { keys: ["name", "sign"], threshold: 0.1});
        const result = fuse.search(query);

        const finalResult = [];
        if (result.length) {
            result.forEach((item) => {
                finalResult.push(item.item);
            });

            setSearchData(finalResult);
        } else {
            setSearchData([]);
        }
    };

    return (
        <div>
            <Header />
           
            <Grid container spacing={2} justifyContent="center" sx={{ padding: '0 20px' }}>  
                <Grid item xs={12} sx={{ pb: 2 }}>
                    <Typography variant="h3" align="center">
                        Mis cursos
                    </Typography>
                </Grid>

                <Grid item xs={12} sx={{ pb: 2 }}>
                    <TextField 
                        fullWidth
                        label="Buscar" 
                        variant="outlined"
                        onChange={(e) => searchItem(e.target.value)}
                    />
                </Grid>

                <Grid item xs={12} sx={{ pb: 2, display: 'flex', flexWrap: 'wrap' }}>
                    { searchData.map((item) => (
                        <Box sx={{ pb: 2, pr: 2, minWidth: 400, maxWidth: 400 }} >
                            <CourseCard
                                name={item.name}
                                sign={item.sign}
                                year={item.year}
                                semester={item.semester}
                                img={item.img}
                                link={item.link}
                            />
                        </Box>
                    ))}
                </Grid>
            </Grid>
        </div>
    );
};

export default HomePage
