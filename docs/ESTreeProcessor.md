# Limitations & Unsupported Features of ESTreeProcessor

** Not everything has been tested, if you find something in this documtation that is not correct, plese let JS55CT know!  Thanks! **

## 1. Arrow functions (`=>`)
**Works** – Both arrow functions and traditional function declarations/expressions are supported.

> **Note:** The comment "Arrow functions (=>) don't work yet" is outdated. The engine parses and executes arrow functions as `ArrowFunctionExpression` and handles their scope and parameters correctly.

---

## 2. Loops
**Works** – Supported loops:
- `for`
- `while`
- `do-while`

---

## 3. Switch Statements
**Works** – `SwitchStatement` is implemented and should work.

---

## 4. Classes
**Limited/Unsupported** –  
- Parsing is supported (Class nodes in AST).  
- **Execution NOT supported** – Any code using `class` will likely throw `Unexpected node type` when you call `execute`.
    - **Works:** Class nodes in the AST.
    - **Does NOT:** Instantiation, inheritance, method calling, etc.

---

## 5. Import/Export (ESModules Syntax)
- **Parsing supported, execution not supported.**
- You can parse code using `import`, `export`, but NOT execute it.

---

## 6. JSX
- **Parsing supported, execution not supported.**
- JSX nodes parse (with extended parser). Execution is NOT present.

---

## 7. Try/Catch/Finally
**Partial support:**
- Try-catch-finally works, but catch param only stores the error as a variable named after the param, does not fully mimic all JS semantics.
- **Destructuring in catch parameter is NOT supported:**  
  (e.g. `catch ({message}) {...}` does not work).

---

## 8. Variable Scope
- Only variables declared in the script (and those provided via `globalVariables`) are accessible.
- External/global objects (`window`, `document`, `Math`, etc.) are *not* available unless **explicitly added in globalVariables**.
- **Intentional security restriction.**  
  If you need something, ask to add it.

---

## 9. Global Environment
- **No access** to browser APIs, DOM, or external modules unless provided in `globalVariables`.
- **No Node.js APIs** (e.g. `fs`, `path`).
- **No asynchronous features** (promises, etc).

---

## 10. Eval/`Function()` Constructor
- `eval("2+2")` and `new Function("x", "return x+1")` do **not work**.

---

## 11. ESNext Features
**Not supported:**
- Generators (`function*`)
- Async functions (`async function`)
- Decorators
- Private fields in classes
- Proxies, Symbols, BigInt arithmetic
- Modules
- `import.meta`, dynamic import

---

## 12. Other Language Features
- **Destructuring:** Some works (see ObjectPattern), but not all exotic forms or function/catch parameters.
- **Spread/rest operators:** Mostly supported in arrays & params.
- **Optional chaining (`?.`):** Supported in member expressions, but may be incomplete for edge cases.

---

## 13. Throw, Error propagation
- Works; any thrown error halts execution, further output is suppressed.

---

## 14. Strict Mode
- Scripts are parsed in strict and non-strict mode.
- The interpreter does NOT fully enforce strict-mode semantics (except for some variable naming checks).
- `'use strict'` is parsed, but not thoroughly enforced.

---

## 15. Other Known Issues
- No support for `super` in classes.
- No support for function hoisting (functions may not be available before declaration).
- No support for comma operator in loops/expressions.
- No support for labels or goto-like constructs.

---

# Summary Table

| Feature                | Parsing | Execution | Notes                                  |
|------------------------|---------|-----------|----------------------------------------|
| Arrow functions        | ✔️      | ✔️        | Fully supported.                       |
| Traditional functions  | ✔️      | ✔️        | Fully supported.                       |
| Loops (`for`, etc)     | ✔️      | ✔️        | Supported.                             |
| Switch statements      | ✔️      | ✔️        | Supported.                             |
| Classes                | ✔️      | ❌        | Not executed; will throw error.        |
| Import/export          | ✔️      | ❌        | Parsing only.                          |
| JSX                    | ✔️      | ❌        | Parsing only.                          |
| External Variables     | ❌      | ❌        | Only if added to globals.              |
| DOM/Browser APIs       | ❌      | ❌        | Not available.                         |
| Node.js APIs           | ❌      | ❌        | Not available.                         |
| Promises/async         | ✔️      | ❌        | Not executed.                          |
| Generators             | ✔️      | ❌        | Not executed.                          |
| Private fields         | ✔️      | ❌        | Not executed.                          |
| Decorators             | ✔️      | ❌        | Not executed.                          |
| Labels/Goto            | ✔️      | ❌        | Not executed.                          |

---

# Example Error Messages

If you use unsupported features, you may see:
- `Unexpected node type: ClassDeclaration`
- `Method not found: Math.sqrt`
- `ReferenceError: Math is not defined.`
- `Unexpected variable declaration kind: function`
- `SyntaxError: Unexpected binary expression operator: in`

---

# What You CAN Do

- Declare variables (`let`, `const`, `var`)
- Use loops (`for`, `while`, `do-while`)
- Use `if-else`, `switch`, `return`, `break`, `continue`
- Declare and call functions (including arrow functions)
- Standard arithmetic, assignment, logical and unary operators
- Arrays and objects (with basic destructuring support)

# What You CAN'T Do

- Classes, import/export, JSX, async/await, generators, decorators
- External/standard libraries (`Math`, etc) unless added to globals
- DOM, browser APIs, Node.js APIs

---

# Security Note

- **Only variables/functions listed in the `globalVariables` parameter are accessible to scripts.**  
  This increases safety from untrusted code execution.

---

## If you need support for something, ask!

If you want to use any external object (like `Math`, `window`, a helper function, etc), please let me know.  
I can update the global variable whitelist so your scripts have access.
