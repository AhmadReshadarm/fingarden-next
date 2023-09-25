import styled from 'styled-components';
import React, { useState } from 'react';
import isEmail from 'validator/lib/isEmail'; // docs: https://www.npmjs.com/package/validator
import isEmpty from 'validator/lib/isEmpty';
import color from 'components/store/lib/ui.colors';
import variants from 'components/store/lib/variants';
import {
  Content,
  AuthBtns,
  BtnsWrapper,
  AuthInput,
  AuthInputsWrapper,
  FormWrapper,
} from './common';
import { InputsTooltip } from 'components/store/checkout/helpers';
import { paginateTo } from './constant';
import ConfirmPsw from './ConfirmPsw';
import { clearServerErr } from 'redux/slicers/authSlicer';
import { useAppDispatch } from 'redux/hooks';
const SignUp = (props: any) => {
  const { direction, authType, paginate, serverErr, setServerErr } = props;
  const dispatch = useAppDispatch();
  const [email, setEmail] = useState('');
  const [name, setName] = useState('');
  const [lastName, setlastName] = useState('');
  const [[nameInput, lastNameInput, emailInput], setInputsErr] = useState([
    false,
    false,
    false,
  ]);
  return (
    <>
      <Content
        drag="x"
        dragConstraints={{ left: 0, right: 0 }}
        custom={direction}
        variants={variants.authorizeSlideX}
        animate={authType == 'signup' ? 'center' : 'enter'}
      >
        <FormWrapper>
          <h4>Введите свои данные</h4>
          <AuthDevider>
            <AuthInputsWrapper>
              <label htmlFor="signup-name">
                <b>
                  <span>Имя</span>
                  <span className="required">*</span>
                </b>
                <InputsTooltip
                  enterTouchDelay={0}
                  leaveTouchDelay={5000}
                  key="name-tip"
                  title={
                    <React.Fragment>
                      <span>Это поле обязательно к заполнению</span>
                      <span>это будет показано публично на нашем сайте</span>
                    </React.Fragment>
                  }
                >
                  <span className="tool-tip">?</span>
                </InputsTooltip>
              </label>
              <AuthInput
                whileHover="hover"
                whileTap="tap"
                variants={variants.boxShadow}
                placeholder={
                  isEmpty(name) && nameInput ? 'Не может быть пустым' : 'Имя'
                }
                type="text"
                id="signup-name"
                value={name}
                style={{
                  fontSize: '0.78rem',
                  border: `solid 1px ${
                    isEmpty(name) && nameInput ? color.hover : color.btnPrimary
                  }`,
                }}
                onChange={(e) => {
                  setName(e.target.value);
                  setInputsErr([
                    true,
                    lastNameInput ? true : false,
                    emailInput ? true : false,
                  ]);
                }}
              />
            </AuthInputsWrapper>
            <AuthInputsWrapper>
              <label htmlFor="signup-lastName">
                <b>
                  <span>Фамилия</span>
                  <span className="required">*</span>
                </b>
                <InputsTooltip
                  enterTouchDelay={0}
                  leaveTouchDelay={5000}
                  key="lastName-tip"
                  title={
                    <React.Fragment>
                      <span>Это поле обязательно к заполнению</span>
                      <span>это будет показано публично на нашем сайте</span>
                    </React.Fragment>
                  }
                >
                  <span className="tool-tip">?</span>
                </InputsTooltip>
              </label>
              <AuthInput
                whileHover="hover"
                whileTap="tap"
                variants={variants.boxShadow}
                placeholder={
                  isEmpty(lastName) && lastNameInput
                    ? 'Не может быть пустым'
                    : 'Фамилия'
                }
                type="text"
                id="signup-lastName"
                value={lastName}
                style={{
                  fontSize: '0.78rem',
                  border: `solid 1px ${
                    isEmpty(lastName) && lastNameInput
                      ? color.hover
                      : color.btnPrimary
                  }`,
                }}
                onChange={(e) => {
                  setlastName(e.target.value);
                  setInputsErr([
                    nameInput ? true : false,
                    true,
                    emailInput ? true : false,
                  ]);
                }}
              />
            </AuthInputsWrapper>
          </AuthDevider>
          <AuthInputsWrapper>
            <label htmlFor="signup-mail">
              <b>
                <span>Эл. адрес</span>
                <span className="required">*</span>
              </b>
              <InputsTooltip
                enterTouchDelay={0}
                leaveTouchDelay={5000}
                key="email-tip"
                title={
                  <React.Fragment>
                    <span>Это поле обязательно к заполнению</span>
                    <span>
                      Ваш эл. адрес будет использоваться как ваше имя
                      пользователя
                    </span>
                  </React.Fragment>
                }
              >
                <span className="tool-tip">?</span>
              </InputsTooltip>
              <span style={{ color: color.hover }}>
                {serverErr == 409 ? 'Уже зарегистрирован' : ''}
              </span>
            </label>
            <AuthInput
              whileHover="hover"
              whileTap="tap"
              variants={variants.boxShadow}
              placeholder={
                !isEmail(email) && emailInput
                  ? 'Эл. адрес не может быть пустым'
                  : 'Эл. адрес'
              }
              type="email"
              id="signup-mail"
              value={email}
              style={{
                border: `solid 1px ${
                  (!isEmail(email) && emailInput) || serverErr == 409
                    ? color.hover
                    : color.btnPrimary
                }`,
              }}
              onChange={(e) => {
                setEmail(e.target.value.toLowerCase());
                dispatch(clearServerErr());
                setServerErr(undefined);
                setInputsErr([
                  nameInput ? true : false,
                  lastNameInput ? true : false,
                  true,
                ]);
              }}
            />
          </AuthInputsWrapper>
        </FormWrapper>
        <BtnsWrapper>
          <AuthBtns
            initial="init"
            whileInView="animate"
            custom={0.05}
            whileHover={{ boxShadow: `0px 0px 4px 2px ${color.boxShadowBtn}` }}
            whileTap={{ boxShadow: `0px 0px 0px 0px ${color.boxShadowBtn}` }}
            variants={variants.fadInSlideUp}
            bgcolor={
              isEmpty(email) ||
              isEmpty(name) ||
              isEmpty(lastName) ||
              !isEmail(email)
                ? color.textSecondary
                : color.btnPrimary
            }
            disabled={
              isEmpty(email) ||
              isEmpty(name) ||
              isEmpty(lastName) ||
              !isEmail(email)
                ? true
                : false
            }
            onClick={
              () => paginate(paginateTo.forward, 'password')
              //   handleSignUpEmail({
              //     email,
              //     paginate,
              //     setLoading,
              //     setServerErr,
              //   })
            }
          >
            Следующий
          </AuthBtns>
          <AuthBtns
            initial="init"
            whileInView="animate"
            custom={0.1}
            whileHover={{ boxShadow: `0px 0px 4px 2px ${color.boxShadowBtn}` }}
            whileTap={{ boxShadow: `0px 0px 0px 0px ${color.boxShadowBtn}` }}
            variants={variants.fadInSlideUp}
            bgcolor={color.textTertiary}
            onClick={() => {
              setServerErr(undefined);
              dispatch(clearServerErr());
              setInputsErr([false, false, false]);
              paginate(paginateTo.back, 'selection');
            }}
          >
            Назад
          </AuthBtns>
        </BtnsWrapper>
      </Content>
      <ConfirmPsw
        firstName={name}
        lastName={lastName}
        email={email}
        {...props}
      />
    </>
  );
};

const AuthDevider = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  gap: 15px;
`;

export default SignUp;