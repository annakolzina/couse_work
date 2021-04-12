import "./styles.css";
import React from "react";

class UserForm extends React.Component {
    constructor(props) {
        super(props);
        var name = props.name;
        var result_n = this.validateName(toString(name, 0));
        var l_name = props.l_name;
        var result_l = this.validateName(toString(l_name, 1));
        var m_name = props.m_name;
        var result_m = this.validateName(toString(m_name, 2));
        var password = props.password;
        var copy_password = props.copy_password;
        var result_pass = this.validatePassword(
            toString(password),
            toString(copy_password)
        );
        var login = props.login;
        var result_login = this.validateLogin(toString(login));
        var email = props.email;
        var result_email = this.validateEmail(toString(email));
        var phone = props.phone;
        var result_phone = this.validatePhone(toString(phone));

        this.state = {
            name: "Введите имя",
            result_n: "",
            l_name: "Введите фамилию",
            result_l: "",
            m_name: "Введите отчество",
            result_m: "",
            password: "",
            result_pass: "",
            copy_password: "",
            login: "",
            result_login: "",
            email: "...@mail.ru",
            result_email: "",
            phone: "+7",
            result_phone: ""
        };

        this.onChangeName = this.onChangeName.bind(this);
        this.onChangeNameL = this.onChangeNameL.bind(this);
        this.onChangeNameM = this.onChangeNameM.bind(this);
        this.onChangeLogin = this.onChangeLogin.bind(this);
        this.onChangeEmail = this.onChangeEmail.bind(this);
        this.onChangePassword = this.onChangePassword.bind(this);
        this.onChangePasswordCopy = this.onChangePasswordCopy.bind(this);
        this.onChangePhone = this.onChangePhone.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    //пусто - валидация успешна
    //строка с ошибкой - валидация не успешна
    validateName(str, index) {
        var fio = ["имя", "фамилию", "отчество", "логин", "пароль"];
        if (str == "") return " Введите " + fio[index];
        return "";
    }

    //проверка паролей
    validatePassword(password, copy) {
        if (password != "" && password==copy && password > 6) return "";
        else return "введите пароль повторно.\n";
    }

    validateLogin(login) {
        if (login.length < 6 && login!="") return "логин меньше 6-ти символов.\n";
        else return "" + this.validateName(login, 3);
    }

    validateEmail(field) {
        if(field.length < 6 && field!="")
            return "почта введена неверно.\n";
        else
            return "";

    }

    validatePhone(phone) {
        if (phone == "" && this.state.email== "" && this.state.result_email == "")
            return "введите email или номер телефона.\n";
        else if(phone== "" && this.state.email!="" && this.state.result_email == "")
            return "";
        else return "";
    }

    onChangePhone(e) {
        var val = e.target.value;
        var res = this.validatePhone(val);
        this.setState({ phone: val, result_phone: res });
    }

    onChangeEmail(e) {
        var val = e.target.value;
        var res = this.validateEmail(val);
        this.setState({ email: val, result_email: res });
    }

    onChangeLogin(e) {
        var val = e.target.value;
        var res = this.validateLogin(val);
        this.setState({ login: val, result_login: res });
    }

    onChangePassword(e) {
        var val = e.target.value;
        this.setState({ password: val });
    }

    onChangePasswordCopy(e) {
        var val = e.target.value;
        var res = this.validatePassword(this.state.password, val);
        this.setState({ copy_password: val, result_pass: res });
    }

    onChangeName(e) {
        var val = e.target.value;
        var res = this.validateName(val, 0);
        this.setState({ name: val, result_n: res });
    }

    onChangeNameL(e) {
        var val = e.target.value;
        var res = this.validateName(val, 1);
        this.setState({ l_name: val, result_l: res });
    }

    onChangeNameM(e) {
        var val = e.target.value;
        var res = this.validateName(val, 2);
        this.setState({ m_name: val, result_m: res });
    }

    handleSubmit(e) {
        e.preventDefault();
        var ris =
            "name: " +
            this.state.name +
            " l_name: " +
            this.state.l_name +
            " m_name: " +
            this.state.m_name +
            " password: " +
            this.state.password +
            " copy: " +
            this.state.copy_password +
            " login: " +
            this.state.login +
            " email: " +
            this.state.email +
            " phone: " +
            this.state.phone;

        var res =
            this.state.result_n +
            "  " +
            this.state.result_m +
            "  " +
            this.state.result_l +
            "  " +
            this.state.result_pass +
            "  " +
            this.state.result_login +
            "  " +
            this.state.result_email +
            "  " +
            this.state.result_phone;

        if (res == "            ") {
            alert(ris);
        }else alert(res);
    }

    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <p>
                    <label>Имя:</label>
                    <br />
                    <input
                        type="text"
                        value={this.state.name}
                        onChange={this.onChangeName}
                    />
                </p>
                <p>
                    <label>Фамилия:</label>
                    <br />
                    <input
                        type="text"
                        value={this.state.l_name}
                        onChange={this.onChangeNameL}
                    />
                </p>
                <p>
                    <label>Отчество:</label>
                    <br />
                    <input
                        type="text"
                        value={this.state.m_name}
                        onChange={this.onChangeNameM}
                    />
                </p>
                <p>
                    <label>Логин:</label>
                    <br />
                    <input
                        type="text"
                        value={this.state.login}
                        onChange={this.onChangeLogin}
                    />
                </p>
                <p>
                    <label>Пароль:</label>
                    <br />
                    <input
                        type="password"
                        value={this.state.password}
                        onChange={this.onChangePassword}
                    />
                </p>
                <p>
                    <label>Повторите пароль:</label>
                    <br />
                    <input
                        type="password"
                        value={this.state.copy_password}
                        onChange={this.onChangePasswordCopy}
                    />
                </p>
                <p>
                    <label>email:</label>
                    <br />
                    <input
                        type="text"
                        value={this.state.email}
                        onChange={this.onChangeEmail}
                    />
                </p>
                <p>
                    <label>номер телефона:</label>
                    <br />
                    <input
                        type="text"
                        value={this.state.phone}
                        onChange={this.onChangePhone}
                    />
                </p>
                <input type="submit" value="Отправить" />
            </form>
        );
    }
}

export default function App() {
    return (
        <div className="App">
            <h3>Страница регистрации</h3>
            <UserForm />
        </div>
    );
}
