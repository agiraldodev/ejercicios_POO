class Carro:
    def __init__(self, marca, modelo, color):
        self.marca = marca
        self.modelo = modelo
        self.color = color
        self.encendido = False

    def encender(self):
        if not self.encendido:
            print("El carro está encendido")
            self.encendido = True
        else:
            print("El carro ya está encendido")

    def apagar(self):
        if self.encendido:
            print("El carro está apagado")
        else:
            print("El carro ya está apagado")

# Crear una instancia de la clase Carro
carrodeJulian = Carro("Camaro", 2022, "Negro")

print(carrodeJulian.marca)