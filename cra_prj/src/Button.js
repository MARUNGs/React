import PropTypes from "prop-types";
import styles from "./Button.module.css";

function Button({ text, onClick }) {
  /*
    Q. Button.module.css 파일에는 .btn 클래스명이 부여됐는데 어떻게 접근연산자를 이용하여 처리가 가능하지?
    A. CRA는 CSS code를 JS Object로 자동변환해준다. 따라서 접근연산자 이용가능.
       즉, css로 선언한 모든 오브젝은 모듈로 취급할 수 있다.
       아마도... 모듈화하여 CSS 오브젝트를 사용하려면 [컴포넌트].module.css 파일명으로 생성할 것.
       이때 개발자도구를 열어 HTML element 요소의 class name을 확인하면 모듈의 고유명칭으로 반영되는 것을 확인할 수 있다.
  */
  return (
    <button onClick={onClick} className={styles.btn}>
      {text}
    </button>
  );
}

Button.propTypes = {
  text: PropTypes.string.isRequired,
};

export default Button;
