# Adding Questions to Exam Banks

## Question Structure

Each question should follow this format:

```javascript
{
  id: 1363,                    // Unique question ID
  category: "Network Fundamentals",  // Question category
  questionType: "Single-select",     // Type of question
  question: "Your question text here?",
  options: [
    "Option A",
    "Option B",
    "Option C",
    "Option D"
  ],
  correctAnswer: 2,            // Index of correct answer (0 = first option)
  explanation: "Detailed explanation of why this is the correct answer...",
  reference: [
    {
      title: "Reference Title",
      description: "Reference description"
    },
    {
      title: "Reference with Link",
      description: "Description",
      link: "https://example.com"  // Optional
    }
  ]
}
```

## How to Add Questions

1. Open the exam file you want to edit (e.g., `examA.js`)
2. Copy the question template above
3. Fill in your question data from your images
4. Add it to the array in the file
5. Save the file
6. Reload your app to see the new questions

## Tips

- Make sure `correctAnswer` index matches the position in the options array (0-based)
- You can have multiple references per question
- Links in references are optional
- Keep the same structure for all questions
