import React from "react";
import "./MainContent.css";

const MainContent = () => {
  return (
    <div className="main-content">
      <div className="question-section">
        <div className="question-header">
          <h2>
            Q.12 Process-Is there a formal process that uses a blend of impact
            criteria to establish the critically of the assets and its accepted
            across the organization. Process-is there a formal process that uses
            a blend of impact criteria to establish the critically of the assets
            and its accepted across the organization.
          </h2>
        </div>
        <div className="answer-comment-section">
          <h2>Answers:</h2>
          <div className="answers">
            <div className="answer">1</div>
            <div className="answer">2</div>
            <div className="answer">3</div>
            <div className="answer">4</div>
          </div>
          <div className="comments-section">
            <textarea placeholder="Comments"></textarea>
            <textarea placeholder="Suggestions"></textarea>
          </div>
          <button className="save-btn">Save Answer</button>
          <div className="progress-box">
            <div className="header">
              <div>
                <strong>Domain:</strong> REM-Reliability Engineering for
                Maintenance
              </div>
              <div>
                <strong>Element:</strong> Answer & Sponsorship (7 Qns)
              </div>
            </div>
            <div className="progress-info">
              <div className="answered">7/7</div>
              <div className="percentage">100% Answered</div>
            </div>
            <div className="progress-bar">
              <div className="filled-bar"></div>
            </div>
            <div className="question-status">
              <div className="circle completed">1</div>
              <div className="circle completed">2</div>
              <div className="circle completed">3</div>
              <div className="circle">4</div>
              <div className="circle">5</div>
              <div className="circle">6</div>
              <div className="circle">7</div>
            </div>
          </div>
        </div>
      </div>
      <div className="summary-section">
        <div className="summary-header"></div>
        <div className="summary-table">
          <h2>Answer Summary:</h2>
          <table class="response-table">
            <thead>
              <tr>
                <th>No</th>
                <th>Response</th>
                <th>Count</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>1</td>
                <td>0%</td>
                <td>0</td>
              </tr>
              <tr>
                <td>2</td>
                <td>20%</td>
                <td>1</td>
              </tr>
              <tr>
                <td>3</td>
                <td>40%</td>
                <td>0</td>
              </tr>
              <tr>
                <td>4</td>
                <td>60%</td>
                <td>0</td>
              </tr>
              <tr>
                <td>5</td>
                <td>80%</td>
                <td>0</td>
              </tr>
              <tr>
                <td>6</td>
                <td>100%</td>
                <td>1</td>
              </tr>
            </tbody>
          </table>
        </div>

        <div className="summary-table2">
          <h2>Distribution:</h2>
          <table class="response-table">
            <thead>
              <tr>
                <th>No</th>
                <th>Response</th>
                <th>Count</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>1</td>
                <td>0%</td>
                <td>0</td>
              </tr>
              <tr>
                <td>2</td>
                <td>20%</td>
                <td>1</td>
              </tr>
              <tr>
                <td>3</td>
                <td>40%</td>
                <td>0</td>
              </tr>
              <tr>
                <td>4</td>
                <td>60%</td>
                <td>0</td>
              </tr>
              <tr>
                <td>5</td>
                <td>80%</td>
                <td>0</td>
              </tr>
              <tr>
                <td>6</td>
                <td>100%</td>
                <td>1</td>
              </tr>
            </tbody>
          </table>
        </div>
        <div className="summary-table3">
          <h2>Comments/Improvement Suggestions:</h2>
          <table class="response-table">
            <thead>
              <tr>
                <th>No</th>
                <th>Response</th>
                <th>Count</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>1</td>
                <td>0%</td>
                <td>0</td>
              </tr>
              <tr>
                <td>2</td>
                <td>20%</td>
                <td>1</td>
              </tr>
              <tr>
                <td>3</td>
                <td>40%</td>
                <td>0</td>
              </tr>
              <tr>
                <td>4</td>
                <td>60%</td>
                <td>0</td>
              </tr>
              <tr>
                <td>5</td>
                <td>80%</td>
                <td>0</td>
              </tr>
              <tr>
                <td>6</td>
                <td>100%</td>
                <td>1</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default MainContent;
