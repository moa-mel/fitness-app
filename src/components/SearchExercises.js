import React, { useEffect, useState } from 'react';
import { Box, Button, Stack, TextField, Typography } from '@mui/material';
import axios from 'axios'
import { exerciseOptions } from '../utils/fetchData';
import HorizontalScrollbar from './HorizontalScrollbar';
import Exercises from './Exercises';

const SearchExercises = () => {
  const [search, setSearch] = useState('');
  const [bodyParts, setBodyParts] = useState([]);

  useEffect(() => {
    axios.get('https://exercisedb.p.rapidapi.com/exercises', exerciseOptions)
    .then(res => {
      setBodyParts(res.data)
      console.log(res.data)
    }).catch(error => console.log(error))
   }, [])

   const handleChange = e => {
    setSearch(e.target.value)
  }

  
//const exercisesData =  axios.get('https://exercisedb.p.rapidapi.com/exercises', exerciseOptions)*/}
  const searchedExercises = bodyParts.filter( bodyPart =>
     bodyPart.name.toLowerCase().includes(search.toLocaleLowerCase())
           || bodyPart.target.toLowerCase().includes(search.toLocaleLowerCase())
           || bodyPart.equipment.toLowerCase().includes(search.toLocaleLowerCase())
           
  );

  return (
    <Stack alignItems="center" mt="37px" justifyContent="center" p="20px">
      <Typography fontWeight={700} sx={{ fontSize: { lg: '44px', xs: '30px' } }} mb="49px" textAlign="center">
        Awesome Exercises You <br /> Should Know
      </Typography>
      <Box position="relative" mb="72px">
        <TextField
          height="76px"
          sx={{ input: { fontWeight: '700', border: 'none', borderRadius: '4px' }, width: { lg: '1170px', xs: '350px' }, backgroundColor: '#fff', borderRadius: '40px' }}
          onChange={handleChange}
          placeholder="Search Exercises"
          type="text"
        />
        
      </Box>
      {searchedExercises?.map(bodyPart =>{
        return (
      <Box sx={{ position: 'relative', width: '100%', p: '20px' }}>
        <HorizontalScrollbar data={bodyParts} 
        bodyPart={bodyPart}/>
       {/* <Exercises data={bodyParts} bodyParts
    bodyPart={bodyPart} />
        */}
      </Box>
        )
      })}
    </Stack>
  );
};

export default SearchExercises;