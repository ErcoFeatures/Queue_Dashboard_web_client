import React from 'react'
import Member from '../member/Member'


const  MembersList  = (props) => {


        return (
            <div>
                {
                    props.members.map(el =>{
                        return (
                            <Member {...el}/>
                        )
                    })
                }
            </div>
        )
    }




export default MembersList;