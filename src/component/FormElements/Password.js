import React,{Component} from 'react';
  
export default class Password extends Component{
    render(){
        const { input, label,onChange, value,name} = this.props;
        return (
          <div className="form-group">
            <label htmlFor="" className="col-sm-6 control-label">{label}</label>
            <div className="col-sm-6">
              <input
                onChange={onChange}
                type="password"
                value={value}
                name={name}
                className="form-control"
              />
            </div>
          </div>
);
    }
}
