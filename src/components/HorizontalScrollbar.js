import React, { useContext } from 'react'
import { Box, Typography } from '@mui/material'
import BodyPart from './BodyPart'
import ExerciseCard from './ExerciseCard';
import { ScrollMenu, VisibilityContext } from 'react-horizontal-scrolling-menu';
import RightArrowIcon from '../assets/icons/right-arrow.png';
import LeftArrowIcon from '../assets/icons/left-arrow.png';

const LeftArrow = () => {
  const { scrollPrev } = useContext(VisibilityContext);

  return (
    <Typography onClick={() => scrollPrev()} className="right-arrow">
      <img src={LeftArrowIcon} alt="right-arrow" />
    </Typography>
  );
};

const RightArrow = () => {
  const { scrollNext } = useContext(VisibilityContext);

  return (
    <Typography onClick={() => scrollNext()} className="left-arrow">
      <img src={RightArrowIcon} alt="right-arrow" />
    </Typography>
  );
};

const HorizontalScrollbar = ({data, bodyParts, bodyPart, setBodyPart}) => {
  return (
    <ScrollMenu LeftArrow={LeftArrow} RightArrow={RightArrow}>
    {data?.map((bodyPart) => (
        <Box
        key={bodyPart.id || bodyPart}
        itemId={bodyPart.id || bodyPart}
        title={bodyPart.id || bodyPart}
        m="0 40px"
        >
        {bodyParts ? <BodyPart bodyPart={bodyPart} setBodyPart={setBodyPart} bodyPart={bodyPart} /> : <ExerciseCard exercise={bodyPart} /> }
        </Box>
        ))}
    </ScrollMenu>
  )
}

export default HorizontalScrollbar