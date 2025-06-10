
const AdminEmailTemplate = ({ name, email, subject, message } : {name: string, email: string, subject: string, message: string}) => {
  return (
    <table
      role="presentation"
      align="center"
      border={0}
      cellPadding="0"
      cellSpacing="0"
      width="100%"
      style={{
        maxWidth: '600px',
        backgroundColor: '#ffffff',
        borderRadius: '8px',
        boxShadow: '0 4px 8px rgba(0,0,0,0.05)',
        margin: '20px auto',
        fontFamily: "'Inter', sans-serif",
      }}
    >
      <tr>
        <td
          style={{
            padding: '20px',
            textAlign: 'center',
            backgroundColor: '#4CAF50',
            borderTopLeftRadius: '8px',
            borderTopRightRadius: '8px',
          }}
        >
          <h1 style={{ color: '#ffffff', fontSize: '24px', margin: '0' }}>
            New Contact Form Submission!
          </h1>
        </td>
      </tr>

      <tr>
        <td style={{ padding: '20px' }}>
          <p style={{ fontSize: '16px', lineHeight: '1.6', color: '#333333' }}>
            You&apos;ve received a new message from your website&apos;s contact form:
          </p>

          {/* Table to display the submitted details */}
          <table
            role="presentation"
            border={0}
            cellPadding="0"
            cellSpacing="0"
            width="100%"
            style={{ marginTop: '20px', borderCollapse: 'collapse' }}
          >

            <tr>
              <td
                style={{
                  padding: '8px 0',
                  borderBottom: '1px solid #eeeeee',
                  fontSize: '15px',
                  color: '#555555',
                  width: '30%',
                }}
              >
                <strong>Name:</strong>
              </td>
              <td
                style={{
                  padding: '8px 0',
                  borderBottom: '1px solid #eeeeee',
                  fontSize: '15px',
                  color: '#333333',
                }}
              >
                {name}
              </td>
            </tr>

            <tr>
              <td
                style={{
                  padding: '8px 0',
                  borderBottom: '1px solid #eeeeee',
                  fontSize: '15px',
                  color: '#555555',
                  width: '30%',
                }}
              >
                <strong>Email:</strong>
              </td>
              <td
                style={{
                  padding: '8px 0',
                  borderBottom: '1px solid #eeeeee',
                  fontSize: '15px',
                  color: '#333333',
                }}
              >
                <a href={`mailto:${email}`} style={{ color: '#007bff', textDecoration: 'none' }}>
                  {email}
                </a>
              </td>
            </tr>

            <tr>
              <td
                style={{
                  padding: '8px 0',
                  borderBottom: '1px solid #eeeeee',
                  fontSize: '15px',
                  color: '#555555',
                  width: '30%',
                }}
              >
                <strong>Subject:</strong>
              </td>
              <td
                style={{
                  padding: '8px 0',
                  borderBottom: '1px solid #eeeeee',
                  fontSize: '15px',
                  color: '#333333',
                }}
              >
                {subject}
              </td>
            </tr>

            <tr>
              <td
                colSpan={2}
                style={{ padding: '15px 0 5px 0', fontSize: '15px', color: '#555555' }}
              >
                <strong>Message:</strong>
              </td>
            </tr>

            <tr>
              <td colSpan={2} style={{ padding: '0 0 15px 0' }}>
                <div
                  style={{
                    backgroundColor: '#f9f9f9',
                    border: '1px solid #e0e0e0',
                    borderRadius: '4px',
                    padding: '15px',
                    fontSize: '15px',
                    color: '#333333',
                    lineHeight: '1.6',
                  }}
                >
                  {message}
                </div>
              </td>
            </tr>
          </table>

          <p style={{ fontSize: '16px', lineHeight: '1.6', color: '#333333', marginTop: '30px' }}>
            Please respond to this inquiry as soon as possible.
          </p>
        </td>
      </tr>

      <tr>
        <td
          style={{
            padding: '20px',
            textAlign: 'center',
            fontSize: '12px',
            color: '#777777',
            borderTop: '1px solid #eeeeee',
          }}
        >
          This email was sent from your website&apos;s contact form.
        </td>
      </tr>
    </table>
  );
};

export default AdminEmailTemplate;