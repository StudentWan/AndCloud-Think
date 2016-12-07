/**
 * created by Zoolsher
 */
'use strict';

import Base from './base.js';
import util from 'util';

export default class extends Base{


    * createAction(){
        return this.display();
    }

    * uploadFile(){
        console.log(this.post());
        return this.success();
    }
}