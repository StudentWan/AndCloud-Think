/**
 * Created by zoolsher on 2017/1/3.
 */

'use strict';
import Base from './base';
import UUID from 'uuid';

export default class extends Base {
  tokenAction(){
    let token = this.http.pathname.split('/').pop();
    this.assign('token',token);
    return this.display()
  }
}