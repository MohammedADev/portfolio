# Security Policy

## Supported Versions

Currently supported versions of the portfolio website:

| Version | Supported          |
| ------- | ------------------ |
| 0.1.x   | :white_check_mark: |
| < 0.1.0 | :x:                |

## Reporting a Vulnerability

We take the security of this portfolio website seriously. If you discover any security issues, please follow these guidelines:

### How to Report

1. **Email**: Send details to security@mohammedabdelaziz.com
2. **Subject Line**: Start with [SECURITY] in the subject
3. **Include Details**:
   - Description of the vulnerability
   - Steps to reproduce
   - Potential impact
   - Suggested fixes (if any)

### Response Timeline

- **Initial Response**: Within 48 hours
- **Status Update**: Within 5 business days
- **Fix Timeline**: Based on severity
  - Critical: 1-3 days
  - High: 1 week
  - Medium: 2 weeks
  - Low: Next release cycle

### Scope

#### In Scope

- Main website application (Next.js)
- Authentication mechanisms
- API endpoints
- Form submissions
- File uploads
- Client-side security

#### Out of Scope

- Third-party services
- Hosted dependencies
- Issues already reported

## Security Best Practices

This project implements the following security measures:

1. **Input Validation**

   - Form sanitization
   - Type checking with TypeScript
   - API request validation

2. **Data Protection**

   - Environment variables for sensitive data
   - Secure headers configuration
   - CORS policy implementation

3. **Dependencies**

   - Regular security audits
   - Automated vulnerability scanning
   - Dependency version control

4. **Frontend Security**
   - CSP (Content Security Policy)
   - XSS protection
   - CSRF tokens
   - Secure cookie handling

## Acknowledgments

We appreciate the security research community's efforts in responsibly disclosing vulnerabilities. Contributors who report valid security issues will be acknowledged in our CONTRIBUTORS.md file (unless they wish to remain anonymous).

## License and Attribution

This security policy is part of the project licensed under MIT License with Attribution Requirement. See [LICENSE.md](LICENSE.md) for details.

---

Last updated: 2025
