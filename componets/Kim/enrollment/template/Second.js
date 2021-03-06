import React from 'react'
import {useSelector, useDispatch} from 'react-redux'
import PositionQuestion from '../blockcontainer/PositionQuestion'
import Link from 'next/link'
import '../../../../css/Jun/enrollment.scss'
import './css/Second.scss'
import Router from 'next/router'
import { POST_PROJECT_REQUEST, PATCH_PROJECT_REQUEST } from '../../../../action/enrollment'

const Second = ({projectId, changed})=>{
    const positionArr = ["직군공통", "기획자", "개발자", "디자이너"]
    const idArr = [0,1,2,4]
    const {projectPosition} = useSelector(state => state.enrollment)
    const datas = useSelector(state=> state.enrollment)
    const {userToken} = useSelector(state => state.user)
    const dispatch = useDispatch();
    const postProject = ()=>{
        if(datas.projectTitle.length < 1){
            alert("제목을 입력해주세요");
            return
        }
        if(datas.projectContent.length <1){
            alert("프로젝트 내용을 입력해주세요");
            return;
        }
        if(datas.projectKeyword.length <1){
            alert("최소 한개의 키워드를 설정해주세요")
            return
        }
        if(datas.projectPosition === 0){
            alert("팀원 모집 직군을 선택해주세요");
            return;
        }
        if(changed){
            
            dispatch({
                type : PATCH_PROJECT_REQUEST,
                data : {...datas, userToken}
            })
        }else{
            dispatch({
                type : POST_PROJECT_REQUEST,
                data : {...datas, userToken}
            })
        }
    }
    return(
        <div>
            <div className = "enroll_container">
                <div style = {{alignSelf : "flex-start", width : "100%"}}>

                
                    <p id = "enroll_question_text">지원자에게 질문</p>
                    <div className = "enroll_question_container">
                        {positionArr.map((el,i)=>{
                            return <PositionQuestion idValue = {idArr[i]} index = {i} isRender = {(projectPosition&idArr[i])===idArr[i]} text = {el}/>
                        })}
                    </div>
                </div>
            </div>

            <div className = "enroll_bottom_container">
                <Link  href={{ pathname: '/enrollment', query: { create : changed? "change" : "create", level : 1, projectid : projectId} }}
                        as={`/enrollment/${changed ? "change" :"create"}/1/${projectId}`}
                >
                    <a>
                        <div className = "enrollment_bottom_button_prev">
                            <p>이전</p>
                        </div>
                    </a>
                </Link>        
                <div onClick = {postProject} className = "enrollment_bottom_button_next">
                    <p>다음</p>
                </div>
                
            
            </div>
            
        </div>
    )
}

export default Second