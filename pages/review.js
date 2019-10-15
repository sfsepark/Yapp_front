import React,{useState} from 'react'
import {useSelector, useDispatch} from 'react-redux'


import ApplyModal from '../componets/Kim/ApplyModal'
import Keyword from '../componets/Kim/Keyword'
import{keyword} from '../dummydatas/dummyKeywords'
import { SET_SELECTED_PAGES, CLEAR_SELECTED_KYEWORD, OPEN_APPLY_MODAL } from '../action'
import '../css/container.scss'
const review = ()=>{
    const dispatch = useDispatch();
    
    const {selects} = useSelector(state=> state.button);

    const openModal = ()=>{
        dispatch({
            type :OPEN_APPLY_MODAL
        })
    }
    return (
        <div className = "container">
            {keyword.map((e,i)=>{
                 const isSelected = selects.findIndex((el)=> el === e.name) === -1? false: true;
                    return <Keyword data = {e} index = {i} isSelected ={isSelected} key = {i} />
                })}
            <div >
                <button  onClick = {openModal}>눌러봐</button>
                <ApplyModal/>
            </div>
        </div>
    )
}
review.getInitialProps = async(context)=>{
    context.store.dispatch({
        type: SET_SELECTED_PAGES,
        data : "review"
    })
    
    return {}
}
export default review