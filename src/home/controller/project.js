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

    * uploadAction(){
        console.log(this.post());
        console.log(this.file());
        return this.success();
    }
}