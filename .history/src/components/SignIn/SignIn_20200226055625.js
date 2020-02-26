import React from 'react';
import './SignIn.css';

const SignIn = () => {
    return (
      <article class="br2 ba white b--white-10 mv4 w-100 w-50-m w-25-l mw5 center">
        <main class="pa4 white-80">
          <form class="measure center">
            <fieldset id="sign_up" class="ba b--transparent ph0 mh0">
              <legend class="f4 fw6 ph0 mh0">Sign In</legend>
              <div class="mt3">
                <label class="db fw6 lh-copy f6" for="email-address">Email</label>
                <input class="pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100" type="email" name="email-address"  id="email-address"/>
              </div>
              
              
            </fieldset>
            <div class="">
              <input class="b ph3 pv2 input-reset ba white b--white bg-transparent grow pointer f6 dib" type="submit" value="Sign in"/>
            </div>
            <div class="lh-copy mt3">
              <a href="#0" class="f6 link dim white db">Sign up</a>
            </div>
          </form>
        </main>
      </article>
      
    );
}

export default SignIn;