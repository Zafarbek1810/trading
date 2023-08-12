import styled from "styled-components";

const CoursesWrapper=styled.div`
.courses__item{
    position: relative;
}
    .right_img{
        position: absolute;
        right: -10%;
        top: 35%;
        img{
            width: 150px;
            height: 150px;
        }

    }

    .courses__item-left-bot-price{
        h5{
            text-decoration: line-through;
            margin-right: 20px;
        }
    }
`

export{CoursesWrapper}