describe('Orange HRM Tests', () => {

  const selectors = {
    usernameField: '[name="username"]',
    passwordField: '[name="password"]',
    loginButton: '.oxd-button',
    sectionTitleTopBar: '.oxd-topbar-header-breadcrumb > .oxd-text',
    dashBoardGrid: '.orangehrm-dashboard-grid',
    wrongCredentialsAlert: ['.oxd-alert']
  }

  const userData = {
    userSucess: {
      username: 'admin',
      password: 'admin123'
    },
    userFail: {
      username: 'teste',
      password: 'teste' 
    }
  }

 
    it('Login sucess', () => {
    cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
    cy.get(selectors.usernameField).type(userData.userSucess.username)
    cy.get(selectors.passwordField).type(userData.userSucess.password)
    cy.get(selectors.loginButton).click()
    cy.location('pathname').should('equal', '/web/index.php/dashboard/index')
    cy.get(selectors.dashBoardGrid)
  })
  it('Login Fail', () => {
    cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
    cy.get(selectors.usernameField).type(userData.userFail.username)
    cy.get(selectors.passwordField).type(userData.userFail.password)
    cy.get(selectors.loginButton).click()
    cy.get(selectors.wrongCredentialsAlert)
  })
})
 

  