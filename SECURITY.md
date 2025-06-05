# Security Policy

## Supported Versions

We actively support the following versions of vue-with-eds with security updates:

| Version | Supported          |
| ------- | ------------------ |
| 1.x.x   | :white_check_mark: |
| < 1.0   | :x:                |

## Reporting a Vulnerability

We take the security of vue-with-eds seriously. If you believe you have found a security vulnerability, please report it to us as described below.

### How to Report

**Please do not report security vulnerabilities through public GitHub issues.**

Instead, please report them via email to: **info@digitaldomaintechnologies.com**

Please include the following information in your report:
- Type of issue (e.g. buffer overflow, SQL injection, cross-site scripting, etc.)
- Full paths of source file(s) related to the manifestation of the issue
- The location of the affected source code (tag/branch/commit or direct URL)
- Any special configuration required to reproduce the issue
- Step-by-step instructions to reproduce the issue
- Proof-of-concept or exploit code (if possible)
- Impact of the issue, including how an attacker might exploit the issue

### What to Expect

You should receive a response within 48 hours. If the issue is confirmed, we will:

1. **Acknowledge** the vulnerability report within 48 hours
2. **Investigate** and confirm the vulnerability
3. **Develop** a fix for the vulnerability
4. **Release** a security update
5. **Notify** users about the security update

### Security Update Process

1. Security fixes are given the highest priority
2. A new version will be released as soon as possible
3. The vulnerability will be disclosed publicly after the fix is available
4. Credit will be given to the reporter (unless they prefer to remain anonymous)

## Security Best Practices

### For Users

When using vue-with-eds in your projects:

- Always use the latest stable version
- Keep your dependencies up to date
- Follow secure coding practices
- Validate and sanitize all user inputs
- Use HTTPS in production environments
- Implement proper Content Security Policy (CSP) headers

### For Contributors

When contributing to vue-with-eds:

- Follow secure coding guidelines
- Validate all inputs and outputs
- Use parameterized queries for any database operations
- Avoid using `eval()` or similar dynamic code execution
- Sanitize user-generated content
- Use secure defaults
- Implement proper error handling without exposing sensitive information

## Known Security Considerations

### Client-Side Security

- This is a client-side Vue.js application
- All code runs in the user's browser
- Sensitive data should not be included in the client-side code
- Always validate data on the server side when integrating with backend services

### Edge Delivery Services Integration

- Data fetched from `/slides/query-index.json` should be validated
- Implement proper error handling for failed requests
- Use HTTPS for all external requests
- Validate image URLs and content before rendering

### Content Security Policy

Recommended CSP headers for production deployments:

```
Content-Security-Policy: default-src 'self'; 
  script-src 'self' 'unsafe-inline'; 
  style-src 'self' 'unsafe-inline'; 
  img-src 'self' data: https:; 
  font-src 'self'; 
  connect-src 'self' https:;
```

## Vulnerability Disclosure Timeline

- **Day 0**: Vulnerability reported
- **Day 1-2**: Initial response and acknowledgment
- **Day 3-7**: Investigation and confirmation
- **Day 8-14**: Development of fix
- **Day 15**: Release of security update
- **Day 16+**: Public disclosure (after users have had time to update)

## Security Resources

- [OWASP Top 10](https://owasp.org/www-project-top-ten/)
- [Vue.js Security Guide](https://vuejs.org/guide/best-practices/security.html)
- [Web Security Guidelines](https://developer.mozilla.org/en-US/docs/Web/Security)

## Contact

For security-related questions or concerns, contact:
- **Email**: info@digitaldomaintechnologies.com
- **Subject**: [SECURITY] vue-with-eds - [Brief Description]

Thank you for helping keep vue-with-eds and our users safe!
