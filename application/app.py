import os
import sys
from pathlib import Path
full_path = os.path.dirname(os.path.abspath(__file__))
sys.path.append(str(Path(full_path).parents[0]))

from application import *
from models import *

if __name__ == '__main__':
    app.run(debug=True)
