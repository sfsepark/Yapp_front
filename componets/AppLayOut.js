import React,{useEffect} from 'react'
/* 이 파일이 보통 리액트를 시작할때 보는 
    첫 화면 뿌려주기시작하는 단계로 보는것이 무방합니다
    children에는 pages에 있는 index.js가 들어가서 뿌려지게됩니다.
*/
import {useSelector} from 'react-redux'
import LoginModal from './Kim/Login/LoginModal'
import NavBar from './NavBar'
import ApplyModal from './Kim/ApplyModal'
import Footer from './Footer'

const AppLayOut = ({children,isMobile})=>{
    const style = {
        zIndex : '1000'
    }
    const {visible, loginVisible} = useSelector(state => state.button)
    useEffect(()=>{
        if(visible ||loginVisible){
            document.body.style.overflow = 'hidden'

        }else{
            document.body.style.overflow = ''
        }
    })
        
    return(
        <div>
            <NavBar isMobile ={isMobile} style = {style}></NavBar>
            
            <LoginModal />
            <ApplyModal />
            <div style = {{minHeight : "100%", paddingBottom : "50px"}}>
                {children}
            </div>
            
            <Footer/>
        </div>
    )
}

export default AppLayOut