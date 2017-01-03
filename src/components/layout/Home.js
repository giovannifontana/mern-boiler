import React, {Component} from 'react';

import Zones from '../container/Zones';
import Comments from '../container/Comments';

export default class Home extends Component{
   
    render(){
       return(
        <div className="container">
           <div className="row">
               <div className="col-md-4">
                <Zones />
               </div>

               <div className="col-md-8">
                <Comments />
               </div>
           
            </div>
        </div>
       );
    }   
}