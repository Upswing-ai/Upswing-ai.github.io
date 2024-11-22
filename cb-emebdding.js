<!-- Load the Voiceflow widget module -->
<script type="module" src="https://cdn.voiceflow.com/widget/bundle.mjs"></script>

<!-- Initialize the Voiceflow chat widget -->
<script type="module">
  function base64EncodeUnicode(str) {
    // Encode the string as UTF-8 bytes
    const utf8Bytes = new TextEncoder().encode(str);
    // Convert bytes to a binary string
    let binary = '';
    utf8Bytes.forEach(byte => binary += String.fromCharCode(byte));
    // Base64 encode the binary string
    return btoa(binary);
  }

  window.voiceflow.chat.load({
    verify: { projectID: '673b83057e21aad722832eaa' },
    url: 'https://general-runtime.voiceflow.com',
    versionID: 'production',
    render: {
      mode: 'embedded',
      target: document.body,
    },
    autostart: true,
    assistant: {
      stylesheet: 'data:text/css;base64,' + base64EncodeUnicode(`
        /* Hide header content */
        .vfrc-header {
          display: none !important;
        }
        .vfrc-header--title {
          color: #000 !important;
        }
        .vfrc-assistant-info {
          display: none !important;
        }
        .vfrc-assistant-info--title {
          display: none !important;
        }
        .vfrc-assistant-info--description {
          display: none !important;
        }
        .vfrc-avatar {
          display: none !important;
        }
        .vfrc-icon {
          display: none !important;
        }
        .vfrc-message {
          background: rgba(255, 255, 255, 0.2) !important;
        }
        .vfrc-button {
          background: rgba(255, 255, 255, 0.1) !important;
        }
        .vfrc-chat {
          background-color: inherit; /* Inherits parent color */
          background: rgba(255, 255, 255, 0.1); /* Apply slight opacity */
          backdrop-filter: blur(50px) brightness(2) !important;
          border-radius: 20px !important;
          overflow: hidden !important;
        }
        .vfrc-system-response--list {
          width: 100% !important;
          margin: 0 !important;
        }
        .vfrc-button {
          color: #000000 !important;
          font-size: 1rem !important;
          background: rgba(234, 190, 122, 0.4) !important;
        }
      `)
    }
  });
</script>
