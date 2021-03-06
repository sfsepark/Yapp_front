import ProjectJobGroup from '../Park/ProjectJobGroup'
import ApplicantSimpleComponent from './ApplicantSimpleComponent'
import ProjectSimpleHOC from './ProjectSimpleHOC';
import roles from '../../methods/role'

class ApplicantList extends React.Component{

    constructor(props){
        super(props);

        this.applicants = {}

        for(var i = 0 ; i < roles.length ; i ++){
            this.applicants[roles[i]] = [];
        }

        for(var i = 0 ; i < props.project.applicants.length ; i ++){
            let curRole = '';

            if(props.project.applicants[i].role <= 1)
                curRole = roles[0]
            else if(props.project.applicants[i].role <= 2)
                curRole = roles[1]
            else
                curRole = roles[2]
            
            this.applicants[curRole].push(props.project.applicants[i])
        }
    }

    render(){

        var projectId = this.props.id;
        var applicants = this.applicants;
        var updateScreen = this.props.updateScreen;

        var applicantList = Object.keys(applicants).map(function(jobgroup){
            var list = applicants[jobgroup].map(function(applicant){
                return <ApplicantSimpleComponent 
                    projectId = {projectId}
                    applicant = {applicant}
                    updateScreen = {updateScreen}/>
            })

            if(list.length == 0)
                return null;

            return (
                <div className = 'applicant-list-jobgroup-container'>
                    <ProjectJobGroup jobgroup = {jobgroup}/>
                    <div className = 'applicant-list-wrapper'>
                        {list}
                    </div>
                </div>
            )
        })

        var handleToggle = this.props.handleToggle;


        return (
            <div className = 'applicant-list-container'>
                {/* 헤더 */}
                <div className = 'applicant-list-header'>
                    <div className = 'applicant-list-header-flex applicant-list-sub-container'>
                        <div className = 'applicant-list-header-left'>
                            <div className = 'applicant-list-title'>
                                지원자 보기
                            </div>
                            <div className = 'applicant-list-sub-title'>
                                <div className = 'applicant-list-header-flex'>
                                    <div className = 'applicant-list-project-title'>
                                        {this.props.project.title}
                                    </div>
                                    <div className = 'applicant-list-number'>
                                        { '지원자 ' + (this.props.project.applicants.length ) + '명'}  
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className = 'applicant-list-header-right'>
                            <div className = 'applicant-list-rollup' onClick = {() => handleToggle(projectId)}>
                                <div className = 'applicant-list-rollup-text'>
                                    지원자목록 닫기
                                </div>
                                <div className = 'applicant-list-rollup-svg'>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="14.076" height="8.452" viewBox="0 0 14.076 8.452">
                                    <path id="패스_1811" data-name="패스 1811" d="M5.624,0,0,5.624l5.624,5.624" transform="translate(12.662 1.414) rotate(90)" fill="none" stroke="#4244ff" strokeLinecap="round" strokeWidth="2"/>
                                    </svg>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>
                {/* 콘텐츠(리스트 영역) */}

                <div className = 'applicant-list-sub-container'>
                    {applicantList}
                </div>

            </div>
        )
    }
}


export default ApplicantList;