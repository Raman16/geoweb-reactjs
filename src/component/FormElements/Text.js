import React,{Component} from 'react';
  
export default class Text extends Component{
    render(){
    
        const { input,name,value, label, onChange} = this.props;
        return (
          <div className="form-group">
            <label htmlFor="" className="col-sm-6 control-label">{label}</label>
            <div className="col-sm-6">
              <input
                type="text"
                className="form-control"
                name={name}
                value={value}
                onChange={onChange}
              />
            </div>
          </div>
);
    }
}
