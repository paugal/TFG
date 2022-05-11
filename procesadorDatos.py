with open('datos.txt') as f:
    lines = f.readlines()

paths = [3,4,5,12,13,14,22,23,24,25,26,34,35,37,38,39]

for i, line in enumerate(lines):
    lines[i] = line.replace('"', '').replace('[', '').replace(']', '').replace('\n', '').replace('hombre', 'M').replace('mujer', 'F').replace('otro', 'O').split(',')
    lines[i] = [lines[i][1:3],lines[i][3:11] ,lines[i][12:len(lines[i])-9], lines[i][len(lines[i])-9:len(lines[i])]]
    #print(lines[i])
    aux = lines[i][1]
    empNum = 0
    
    for e, line in enumerate(aux):
        if(e == 2 or e == 4 or e == 5 or e == 6):
            aux[e] = (int(line) - 6)*(-1)
        else:
            aux[e] = int(line)

        empNum += aux[e]

    aux = lines[i][2]
    for e, line in enumerate(aux):
        aux[e] = int(line)

    result = [a for a in lines[i][2] if a in paths]
    lines[i][2] = result
    
    aux = lines[i][2]
    for e, line in enumerate(aux):
        if(aux[e] == 3):
            aux[e] = 'defiende'
        
        elif(aux[e] == 4):
            aux[e] = 'noResponde'

        elif(aux[e] == 5):
            aux[e] = 'insulta'
        
        elif(aux[e] == 12):
            if('defiende' in aux):
                aux[e] = 'verdad'
            else:
                aux[e] = 'mentira'
        elif(aux[e] == 13):
            if('noResponde' in aux):
                aux[e] = 'verdad'
            else:
                aux[e] = 'mentira'
        elif(aux[e] == 14):
            if('insulta' in aux):
                aux[e] = 'verdad'
            else:
                aux[e] = 'mentira'
        elif(aux[e] == 22):
            aux[e] = 'asertivo'
        elif(aux[e] == 23 or aux[e] == 26):
            aux[e] = 'agresivo'
        elif(aux[e] == 25 or aux[e] == 35 or aux[e] == 37 or aux[e] == 38 ):
            aux[e] = 'ayuda'
        elif(aux[e] == 24):
            aux[e] = 'minimiza'
        elif(aux[e] == 34 or aux[e] == 39):
            aux[e] = 'pasivo'

    empNum = empNum / 8
    lines[i][1] = empNum

    aux = lines[i][3]
    for e, line in enumerate(aux):
        aux[e] = int(line)

    lista = [lines[i][0][0]]+ [int(lines[i][0][1])]+ [lines[i][1]] + lines[i][2] + lines[i][3]
    print(' '.join(str(c) for c in lista))
