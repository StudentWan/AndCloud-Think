/**
 * Created by zoolsher on 2017/1/3.
 */

'use strict';
import Base from './base';
import UUID from 'uuid';
import child_process from 'child_process';
import net from 'net';
import ws from 'ws';


export default class extends Base {

    async tokenAction() {
        let token = this.http.pathname.split('/').pop();
        console.log(token);
        let tokenModel = this.model('tokens');
        let mirrorModel = this.model('mirror');
        let tokenData = await tokenModel.where({ token: token }).find();
        console.log(tokenData);
        let mirrorData = await mirrorModel.where({ id: tokenData.imageid }).find();
        console.log(mirrorData);


        this.assign({
            'token': token,
            //测试数据
            'width': 800,
            'height': 600,
            'wmwidth': 768,
            'wmheight': 1200
                // 'width': mirrorData.width,
                // 'height': mirrorData.height,
                // 'wmwidth': mirrorData.wmwidth,
                // 'wmheight': mirrorData.wmheight

        });
        return this.display()
    }
}