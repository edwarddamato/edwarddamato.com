import * as React from 'react';
import * as ReactDOM from 'react-dom';
import './Index.scss';

class Index extends React.Component {
  render() {
    return (
      <div className={'App'}>
        <div className={'App-header'}>
          <h1>Edward D'Amato</h1>
          <ol>
            <li>
              <a href={'https://github.com/edwarddamato'}>View on Github</a>
            </li>
            <li>
              <a href={'http://edwarddamato.com/cv.html'} target={'_blank'} rel={'noopener noreferrer'}>
                Curriculum Vitae
              </a>
            </li>
          </ol>
        </div>
      </div>
    );
  }
}

ReactDOM.render(<Index />, document.getElementById('root'));

export default Index;
