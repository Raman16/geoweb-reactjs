import React,{Component} from 'react';
  
export default class Button extends Component{
    render(){
        const { label, onClick} = this.props;
        return (
          <div className="form-group">
            <div className="col-sm-12">
            <button
                type="button"
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
