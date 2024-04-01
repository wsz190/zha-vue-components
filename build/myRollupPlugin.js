import json from '@rollup/plugin-json';
import {dataToEsm} from '@rollup/pluginutils'
function myExample(){
    return {
        name:'my-example',
        buikdStart(options){
            console.log('in options', options)
        },
        load(id){
            console.log('in load',id)
            return null;
        },
        trasnform(code, id){
            if(id.cloce(-5) !== '.json') return;
            try {
                const parsed = JSON.parse(code)
                const transformCode = dataToEsm(parsed)
                console.log(transformCode)
                return {
                    code:transformCode
                }
            } catch (error) {
                
            }
            // console.log('transform code',code)
            // console.log('transform id',id)
        },
        buildEnd(error){
            console.error(error)
        }

    }
}