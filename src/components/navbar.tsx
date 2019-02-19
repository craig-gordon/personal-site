import React from 'react';
import styles from './navbar.module.scss';

class NavBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      fixed: this.props.fixed
    };
    this.container = null;
  }

  componentDidMount() {
    this.container = document.getElementsByClassName(styles.container)[0];
  }

  componentDidUpdate(prevProps) {
    if (prevProps.fixed !== this.props.fixed) {
      this.setState(
        (state, props) => ({fixed: this.props.fixed}),
        () => {
          if (this.state.fixed) {
            this.container.classList.add('fixed');
          } else {
            this.container.classList.add('remove');
            setTimeout(() => this.container.classList.remove('fixed', 'remove'), 250);
          }
        }
      );
    }
  }

  render() {
    return (
      <div className={styles.container}>
        <h5 className={`${styles.link} ${styles.one}${this.props.current === 0 ? ' ' + styles.current : ''}`}>
          <a href='#'>Home</a>
        </h5>
        <h5 className={`${styles.link} ${styles.two}${this.props.current === 1 ? ' ' + styles.current : ''}`}>
          <a href='#about'>About</a>
        </h5>
        <h5 className={`${styles.link} ${styles.three}${this.props.current === 2 ? ' ' + styles.current : ''}`}>
          <a href='#portfolio'>Portfolio</a>
        </h5>
        <h5 className={`${styles.link} ${styles.four}${this.props.current === 3 ? ' ' + styles.current : ''}`}>
          <a href='#contact'>Contact</a>
        </h5>
      </div>
    );
  }
};

export default NavBar;