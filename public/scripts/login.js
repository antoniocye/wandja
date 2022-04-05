var oktaSignIn = new OktaSignIn({
        baseUrl: "https://dev-64467906.okta.com",
        clientId: "0oa3iz0mwpf29d7cJ5d7",
        authParams: {
          issuer: "default",
          responseType: ['token', 'id_token'],
          display: 'page'
        }
      });

      if (oktaSignIn.token.hasTokensInUrl()) {
        oktaSignIn.token.parseTokensFromUrl(
          // If we get here, the user just logged in.
          function success(res) {
            var accessToken = res[0];
            var idToken = res[1];

            oktaSignIn.tokenManager.add('accessToken', accessToken);
            oktaSignIn.tokenManager.add('idToken', idToken);

            window.location.hash='';
            document.getElementById("messageBox").innerHTML = "Statut: Bonjour, " + idToken.claims.email + "! Vous venez juste de vous connecter! :)";
          },
          function error(err) {
            console.error(err);
          }
        );
      } else {
        oktaSignIn.session.get(function (res) {
          // If we get here, the user is already signed in.
          if (res.status === 'ACTIVE') {
            document.getElementById("messageBox").innerHTML = "Statut: Bonjour, " + res.login + "! Vous etes déjà connectés! :)";
            return;
          }
          oktaSignIn.renderEl(
            { el: '#okta-login-container' },
            function success(res) {},
            function error(err) {
              console.error(err);
            }
          );
        });
      }