function setup_pyodide() {
    // setup pyodide environment to run code blocks as needed
    var setup_code = `
import sys, io, traceback
namespace = {}  # use separate namespace to hide run_code, modules, etc.
def run_code(code):
  """run specified code and return stdout and stderr"""
  out = io.StringIO()
  oldout = sys.stdout
  olderr = sys.stderr
  sys.stdout = sys.stderr = out
  try:
      # change next line to exec(code, {}) if you want to clear vars each time
      exec(code, namespace)
  except:
      traceback.print_exc()
    
  sys.stdout = oldout
  sys.stderr = olderr
  return out.getvalue()
`
    pyodide.runPython(setup_code)
}

function runPython() {
    pyodide.globals.code_to_run = editor.getSession().getValue()
    const input=document.getElementById("input").value
    pyodide.globals.input_string=input
    const result=pyodide.runPython(`
import io,sys
sys.stdin=io.StringIO(input_string)
run_code(code_to_run)

`)

    document.getElementById("output").value=result
            


}

        // run setup_pyodide() when pyodide finishes loading
languagePluginLoader.then(setup_pyodide)
