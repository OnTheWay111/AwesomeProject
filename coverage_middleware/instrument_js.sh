ORIGIN_DIR="jss"
INSTRUMENTED_DIR="../jss"

echo "Instrumenting js files from ${ORIGIN_DIR} to ${INSTRUMENTED_DIR}"
nyc instrument ${ORIGIN_DIR} ${INSTRUMENTED_DIR}
