import {v4 as uuid} from 'uuid';

const users = [{
    _id:uuid(),
    userName:'admin',
    password:'123456',
    type:'admin'

},{
    _id:uuid(),
    userName:'user',
    password:'123456',
    type:'user',

}];
export default users;