// src/App.jsx
import { SyntheticEvent, useState } from 'react';
import styles from './App.module.scss';

const App = () => {
  const [longUrl, setLongUrl] = useState('');
  const [desiredCode, setDesiredCode] = useState('');
  const [result, setResult] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const staticPreset = 'zippy.me/'; // Your static domain preset

  const handleSubmit = async (e: SyntheticEvent) => {
    e.preventDefault();
    setError('');
    setLoading(true);

    // Basic validation
    if (!isValidUrl(longUrl)) {
      setError('Please enter a valid URL');
      setLoading(false);
      return;
    }

    if (!desiredCode.trim()) {
      setError('Please enter a short code');
      setLoading(false);
      return;
    }

    try {
      // Replace with your actual backend API call
      const response = await fetch('your-backend-api-endpoint', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          longUrl,
          shortCode: desiredCode
        }),
      });

      if (!response.ok) throw new Error('Failed to create short link');

      // Reset form
      setLongUrl('');
      setDesiredCode('');
      setResult(`${staticPreset}${desiredCode}`);
      
    } catch (err) {
      if (err instanceof Error)
      setError(err.message || 'Something went wrong');
    } finally {
      setLoading(false);
    }
  };

  const isValidUrl = (url: string) => {
    try {
      new URL(url);
      return true;
    } catch {
      return false;
    }
  };

  const copyToClipboard = () => {
    navigator.clipboard.writeText(result);
  };

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>ZippyLink Shortener</h1>
      
      <form onSubmit={handleSubmit} className={styles.form}>
        <div className={styles.inputGroup}>
          <label htmlFor="longUrl">Original URL</label>
          <input
            type="url"
            id="longUrl"
            value={longUrl}
            onChange={(e) => setLongUrl(e.target.value)}
            placeholder="Enter your long URL"
            required
          />
        </div>

        <div className={styles.inputGroup}>
          <label htmlFor="desiredCode">Short Code</label>
          <div className={styles.inputWithPreset}>
            <span className={styles.preset}>{staticPreset}</span>
            <input
              type="text"
              id="desiredCode"
              value={desiredCode}
              onChange={(e) => setDesiredCode(e.target.value)}
              placeholder="your-custom-code"
              required
            />
          </div>
        </div>

        {error && <p className={styles.error}>{error}</p>}

        <button 
          type="submit" 
          className={styles.submitButton}
          disabled={loading}
        >
          {loading ? 'Creating...' : 'Create ZippyLink'}
        </button>
      </form>

      {result && (
        <div className={styles.modalOverlay}>
          <div className={styles.resultModal}>
            <h3>Your ZippyLink is ready!</h3>
            <div className={styles.resultContainer}>
              <input
                type="text"
                value={result}
                readOnly
                className={styles.resultInput}
              />
              <button 
                onClick={copyToClipboard}
                className={styles.copyButton}
              >
                Copy
              </button>
            </div>
            <button 
              onClick={() => setResult('')}
              className={styles.closeButton}
            >
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default App;