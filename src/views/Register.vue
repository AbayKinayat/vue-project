<template>
  <form v-on:submit.prevent="onSubmit" class="card auth-card">
    <div class="card-content">
      <span class="card-title">Домашняя бухгалтерия</span>
      <div class="input-field">
        <input
          id="email"
          type="text" 
          v-model.trim="$v.email.$model"
          :class="{invalid: $v.email.$error}"
        />
        <label for="email">Email</label>
        <small
          v-if="$v.email.$dirty && !$v.email.required"
         class="helper-text invalid">Введите email</small>
         <small
          v-else-if="$v.email.$dirty && !$v.email.email"
         class="helper-text invalid">Введите корректный email</small>
      </div>
      <div class="input-field">
        <input
          id="password"
          type="password"
          class="validate"
          v-model="$v.password.$model"
          :class="{invalid: $v.password.$error}"
         />
        <label for="password">Пароль</label>
         <small
        v-if="$v.password.$dirty && !$v.password.required"
         class="helper-text invalid">Введите пароль</small>
         <small
        v-else-if="$v.password.$dirty && !$v.password.minLength"
         class="helper-text invalid">Введите {{$v.password.$params.minLength.min}} символов. Вы ввели {{password.length}} символ</small>
         
      </div>
      <div class="input-field">
        <input
        id="name"
        type="text" 
        class="validate" 
        v-model.trim="$v.name.$model"
        :class="{invalid: $v.name.$error}"
        />
        <label for="name">Имя</label>
        <small
          v-if="$v.name.$dirty && !$v.name.required"
          class="helper-text invalid">Введите свое имя
        </small>
        <small
          v-if="$v.name.$dirty && !$v.name.minLength"
          class="helper-text invalid"
        >
          Нужно ввести от {{$v.name.$params.minLength.min}} символов. Вы ввели {{name.length}}
        </small>
      </div>
      <p>
        <label>
          <input type="checkbox"
            v-model="$v.agree.$model"
          />
          <span >С правилами согласен</span>
        </label>
      </p>
    </div>
    <div class="card-action">
      <div>
        <button class="btn waves-effect waves-light auth-submit" type="submit">
          Зарегистрироваться
          <i class="material-icons right">send</i>
        </button>
      </div>

      <p class="center">
        Уже есть аккаунт?
        <router-link to="/login">Войти!</router-link>
      </p>
    </div>
  </form>
</template>

<script>
import {email, required, minLength} from 'vuelidate/lib/validators'

export default {
  name: 'register',
  data: () => ({
    email: '',
    password: '',
    name: '',
    agree: false,
  }),
  validations: {
    email: {email, required},
    password: {required, minLength: minLength(6)},
    name: {required, minLength: minLength(2)},
    agree: {checked: v => v}
  },
  methods: {
    async onSubmit() {
      if (this.$v.$invalid) {
        this.$v.$touch()
        return
      }
      const formRegisterData = {
        email: this.email,
        password: this.password,
        name: this.name,
      }

      try {
        await this.$store.dispatch('register', formRegisterData)
        this.$router.push('/')
      } catch (e) {}

    }
  },
}
</script>