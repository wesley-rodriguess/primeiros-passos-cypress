describe('Orange HRM Tests', () => {

  const selectors = {
    usernameField: '[name="username"]',
    passwordField: '[name="password"]',
    loginButton: '.oxd-button',
    sectionTitleTopBar: '.oxd-topbar-header-breadcrumb > .oxd-text',
    wrongCredentialsAlert: '.oxd-alert'
  }

 it('Login sucess', () => {
    cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
    cy.get(selectors.usernameField).type('admin')
    cy.get(selectors.passwordField).type('admin123')
    cy.get(selectors.loginButton).click()
    cy.location('pathname').should('equal', '/web/index.php/dashboard/index')
    cy.get(selectors.sectionTitleTopBar).contains('Dashboard')
  })
  it('Login Fail', () => {
    cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
    cy.get(selectors.usernameField).type('admi')
    cy.get(selectors.passwordField).type('admin123')
    cy.get(selectors.loginButton).click()
    cy.get(selectors.wrongCredentialsAlert)
  })
})
 

  