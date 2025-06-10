const SubmitterEmailTemplate = ({ name, subject, message } : {name: string, subject: string, message: string}) => {
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
            backgroundColor: '#007bff',
            borderTopLeftRadius: '8px',
            borderTopRightRadius: '8px',
          }}
        >
          <h1 style={{ color: '#ffffff', fontSize: '24px', margin: '0' }}>
            Thanks for reaching out!
          </h1>
        </td>
      </tr>

      <tr>
        <td style={{ padding: '20px' }}>
          <p style={{ fontSize: '16px', lineHeight: '1.6', color: '#333333' }}>
            Hi <strong>{name}</strong>,
          </p>
          <p style={{ fontSize: '16px', lineHeight: '1.6', color: '#333333' }}>
            Thank you for contacting me! I&apos;ve received your message and appreciate you taking the
            time to connect.
          </p>
          <p style={{ fontSize: '16px', lineHeight: '1.6', color: '#333333' }}>
            I aim to respond to all inquiries as soon as possible. I will get back to you as soon as possible.
          </p>

          <p style={{ fontSize: '16px', lineHeight: '1.6', color: '#333333', marginTop: '25px' }}>
            Here&apos;s a copy of the message you sent:
          </p>
          <div
            style={{
              backgroundColor: '#f9f9f9',
              border: '1px solid #e0e0e0',
              borderLeft: '5px solid #007bff',
              borderRadius: '4px',
              padding: '15px',
              fontSize: '15px',
              color: '#333333',
              lineHeight: '1.6',
              marginTop: '10px',
            }}
          >
            <p style={{ margin: '0 0 10px 0' }}>
              <strong>Subject:</strong> {subject}
            </p>
            <p style={{ margin: '0' }}>{message}</p>
          </div>
          <p style={{ fontSize: '16px', lineHeight: '1.6', color: '#333333', marginTop: '25px' }}>
            I appreciate your patience!
          </p>
          <p style={{ fontSize: '16px', lineHeight: '1.6', color: '#333333' }}>Best regards,</p>
          <p style={{ fontSize: '16px', lineHeight: '1.6', color: '#333333' }}>
            <strong>Yacine Belahadji</strong>
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
          This is an automated response. Please do not reply to this email directly.
        </td>
      </tr>
    </table>
  );
};

export default SubmitterEmailTemplate;
