import React from 'react'


const Unauthorizedaccess = (props) => {

        return (
            <div className="container-fluid exception">
                <div className="t1">Unauthorized Access</div>
                <div className="t2">You are not allowed to view this page</div>
                <div className="t3">
                    <span> For further assistance, please contact us at </span>
                    <a href="mailto:tnsupport@cebglobal.com">
                        tnsupport@cebglobal.com
                    </a>
                </div>
            </div>
        );

}


export default Unauthorizedaccess;

