import React,{Component} from 'react';
  
export default class SubmitButton extends Component{
    render(){
        const { label, onClick} = this.props;
        return (
          <div className="form-group">
           <label className="col-sm-6 control-label"></label>
            <div className="col-sm-6">
            <button
                type="submit"
                onClick={e => { if (onClick) onClick(e) }}
                className="form-control btn-primary"
              >
                {label}
              </button>
            </div>
          </div>
);
    }
}
