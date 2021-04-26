import React, { useEffect, useState } from 'react';
import '../Styles/index.scss';

export interface IIconPath {
    [name: string]: {
      path: string;
      viewBox: string;
    };
  }

export const IconPath: IIconPath = {
    ['star']: {
      path:
        'M259.3 17.8L194 150.2 47.9 171.5c-26.2 3.8-36.7 36.1-17.7 54.6l105.7 103-25 145.5c-4.5 26.3 23.2 46 46.4 33.7L288 439.6l130.7 68.7c23.2 12.2 50.9-7.4 46.4-33.7l-25-145.5 105.7-103c19-18.5 8.5-50.8-17.7-54.6L382 150.2 316.7 17.8c-11.7-23.6-45.6-23.9-57.4 0z',
      viewBox: '0 0 576 525',
    },
    ['heart']: {
        path:
          'M462.3 62.6C407.5 15.9 326 24.3 275.7 76.2L256 96.5l-19.7-20.3C186.1 24.3 104.5 15.9 49.7 62.6c-62.8 53.6-66.1 149.8-9.9 207.9l193.5 199.8c12.5 12.9 32.8 12.9 45.3 0l193.5-199.8c56.3-58.1 53-154.3-9.8-207.9z',
        viewBox: '0 0 512 512',
    },
  };

export type ratingType = 'star';
export type unselectColor = 'gray' | 'white' | 'red' ;
export type selectedColor = 'white' | 'yellow' | 'green' ;
export type size = 'large' | 'small' | 'default'
export type rating = 0|1|2|3|4|5;

export enum Colors {
    default = "rgb(226, 226, 226)",
    red = 'rgb(236,67,55)',
    white='white',
    yellow='rgb(255,194,9)',
    green='rgb(129,221,67)',
    gray= 'rgb(226, 226, 226)'
}


interface StarRatingProps{

    unselectColor?: unselectColor,
    selectedColor?: selectedColor,
    size?:number,
    getRating?:Function,
    defaultRating?:rating;
}
let value=0;
const StarRating:React.FunctionComponent<StarRatingProps>=(props) =>{
    let {size,getRating,selectedColor,unselectColor ,defaultRating }= props;
    const [rating,setRating]= useState(0);

    const [unSelected,setUnSelected] = useState(Colors.default);
    const [selected,setSelected] = useState(Colors.yellow);

    useEffect(()=>{
        if(defaultRating){
            setRating(defaultRating);
            value = defaultRating;
        }
        switch(unselectColor){
            case 'gray':
                setUnSelected(Colors.gray);
                break;
            case 'red':
                setUnSelected(Colors.red);
                break;
            case 'white':
                setUnSelected(Colors.white);
                break;
            default : setUnSelected(Colors.default);
                break;
        }

        switch(selectedColor){
            case 'white':
                setSelected(Colors.white);
                break;
            case 'yellow':
                setSelected(Colors.yellow);
                break;
            case 'green':
                setSelected(Colors.green);
                break;
            default : setUnSelected(Colors.yellow);
                break;
        }
        if(!!getRating){
            getRating(value)
        }
    },[])

    const changeValue = (num:number)=>{
        if(rating === num){
            setRating(rating-1);
            value = rating-1;
        }
        else{
            setRating(num)
            value = num;
        }
        if(getRating){
            getRating(value)
        }
    }
    return (
        <div>
            <h1 className="noSelect">Rating Component</h1>
        <svg 
            viewBox={IconPath['star'].viewBox}
            height={`${size}px`}
            >
            <path className="star-cursor" onClick={()=>changeValue(1)} fill={1<=rating?selected:unSelected} d={IconPath['star'].path} />
        </svg>
        <svg 
            viewBox={IconPath['star'].viewBox}
            height={`${size}px`}
            >
            <path className="star-cursor" onClick={()=>changeValue(2)} fill={2<=rating?selected:unSelected} d={IconPath['star'].path} />
        </svg>
        <svg 
            viewBox={IconPath['star'].viewBox}
            height={`${size}px`}
            >
            <path className="star-cursor" onClick={()=>changeValue(3)} fill={3<=rating?selected:unSelected} d={IconPath['star'].path} />
        </svg>
        <svg 
            viewBox={IconPath['star'].viewBox}
            height={`${size}px`}
            >
            <path className="star-cursor" onClick={()=>changeValue(4)} fill={4<=rating?selected:unSelected} d={IconPath['star'].path} />
        </svg>
        <svg 
            viewBox={IconPath['star'].viewBox}
            height={`${size}px`}
            >
            <path className="star-cursor" onClick={()=>changeValue(5)} fill={5<=rating?selected:unSelected} d={IconPath['star'].path} />
        </svg>
        <h4 className="noSelect">Rating: {rating}</h4>
        </div>
    )
}

StarRating.defaultProps = {
    unselectColor: 'gray',
    selectedColor: 'yellow',
    size:20,
}

export default StarRating
