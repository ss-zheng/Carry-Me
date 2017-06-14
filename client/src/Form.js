import React from 'react';

export function FieldGroup(props) {
    return (
      <div className="form-group">
          <label className="control-label" htmlFor={props.content}>
              {props.label}
          </label>
          <input className="form-control" name={props.content} placeholder={props.placeholder} type={props.type}/> 
      </div>
    );
}
