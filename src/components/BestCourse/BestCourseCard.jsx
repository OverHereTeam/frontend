import React from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import Badge from '../common/Badge';
import {ReactComponent as TotalDist} from '../../assets/svg/TotalDistance.svg';
import dummyImage from '../../assets/svg/dummy.svg';


function BestCourseCard(props){
    const navigate = useNavigate();
    const toDetails = () => {
        navigate(`/course-details/${props.courseId}`);
    }

    return (
        <>
            <Card onClick={toDetails}>
                <div>
                    {props.rank && 
                    <Rank>
                        Best <br /> {props.rank}
                    </Rank>
                    }
                    <Image src={props.img || dummyImage} alt={props.title} />
                </div>

                <Content>
                    <Badge text={props.region} color="gray" />      {/* 지역 정보 표시 */}
                    <Badge text={props.courseType} color="yellow" />
                    <h2>{props.title}</h2>
                    <p>{props.description}</p>
                    <div className="best-badges">           
                        {props.attractions && props.attractions.map((attraction, index) => (
                            <Badge key={index} text={attraction} color="gray" />
                        ))}
                    </div>
                    <TotalKM> <TotalDist /> 총 {props.distance}KM </TotalKM> 
                </Content>
            </Card>
            <Divider />
        </>
    );
}

export default BestCourseCard;

const Card = styled.div`
    display: flex;
    justify-content: center;
    cursor: pointer;
`
const Image = styled.img`
    height: 14em;
    aspect-ratio: 1 / 0.6;
    object-fit: cover;
    border-radius: 5px;
    background-color: #ECEEF0;
`
const Rank = styled.div`
    position: absolute;
    display: flex;
    justify-content: center;
    text-align: center;
    align-items: center;
    padding: 10px;
    background-color: white;
    height: 2.3em;
    aspect-ratio: 1 / 1;
    font-weight: bold;
`
const TotalKM = styled.p`
    display: flex;
    justify-content: center;
    align-items: center;
    position: absolute;
    right: 0;
    bottom: 0;
    margin: 4px;
    gap: 7px;
`
const Content = styled.div`
    position: relative;
    padding: 0 1.5em;
    width: 100%;
    h2 {
        margin: 0.5em 0;
    }
    p {
        text-overflow: ellipsis;
    }
`
const Divider = styled.div`
    border: 1px solid #D4D8DC;
    margin: 2.5em 0;
`